import React, { useState, useRef } from 'react';
import { Button, Span, Tile } from '../../atoms';
import { BoardStyled, SectionStyled } from './styled';

const WINNING_POSITIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

const TOKEN_X = 'X';
const TOKEN_O = 'O';
const initialBoardState = new Array(9).fill('') as string[];

export const SoloGame: React.FC = () => {
  const [boardState, setBoardState] = useState(initialBoardState);
  const previousBoardState = useRef<string[]>([]);
  const [player1IsPlaying, setPlayer1IsPlaying] = useState(true);
  const [resultState, setResultState] = useState('');

  function _handleResetButton() {
    setBoardState(initialBoardState);
    previousBoardState.current = [];
    setPlayer1IsPlaying(true);
    setResultState('');
  }

  function _getWInner(boardState: string[]) {
    for (let i = 0; i < WINNING_POSITIONS.length; i++) {
      const [a, b, c] = WINNING_POSITIONS[i];
      if (
        boardState[a] &&
        boardState[a] === boardState[b] &&
        boardState[a] === boardState[c]
      ) {
        return boardState[a];
      }
    }
    return null;
  }

  function _isBoardFull(boardState: string[]) {
    for (let i = 0; i < boardState.length; i++) {
      if (boardState[i] === '') {
        return false;
      }
    }
    return true;
  }

  function _tileIsFull(index: number) {
    return boardState[index] !== '';
  }

  function _handleClickTile(index: number) {
    if (_tileIsFull(index) || _getWInner(boardState)) {
      return;
    }
    const nextBoardState = boardState.slice();
    nextBoardState[index] = player1IsPlaying ? TOKEN_X : TOKEN_O;
    setBoardState(nextBoardState);
    previousBoardState.current = boardState;
    const winner = _getWInner(nextBoardState);
    if (winner) {
      setResultState(`Winner: ${winner}`);
    } else if (_isBoardFull(nextBoardState)) {
      setResultState('It is a draw!');
    } else {
      setPlayer1IsPlaying(!player1IsPlaying);
    }
  }

  function _handleUndoButton() {
    if (previousBoardState.current.length !== 0) {
      setBoardState(previousBoardState.current);
      setPlayer1IsPlaying(!player1IsPlaying);
      previousBoardState.current = [];
    } else {
      alert('No moves to undo');
    }
  }

  return (
    <React.Fragment>
      <SectionStyled>
        <Span
          value={`Player ${player1IsPlaying ? TOKEN_X : TOKEN_O}'s turn `}
        />
        <Span value={resultState} />
        <BoardStyled>{_renderBoard(boardState)}</BoardStyled>
        <Button
          value="Reset"
          handleOnClick={() => _handleResetButton()}
        ></Button>
        <Button
          value="Undo"
          handleOnClick={() => _handleUndoButton()}
          disabled={!previousBoardState.current.length}
        ></Button>
      </SectionStyled>
    </React.Fragment>
  );

  function _renderBoard(boardState: string[]) {
    return (
      <React.Fragment>
        {boardState.map((element, index) => (
          <Tile
            value={element}
            handleOnClick={() => _handleClickTile(index)}
            key={index}
          />
        ))}
      </React.Fragment>
    );
  }
};
