import React, { useState, useRef } from 'react';
import { Stage, Layer, Circle, Line, Text } from 'react-konva';
import { Box, Button } from '@mui/material';

/**
 * react-konva で乳房イメージ円にフリーハンド描画できるコンポーネント
 * 
 * @param {Object} props
 * @param {string} props.label  - 右乳房か左乳房かなどのテキスト表示用
 * @param {number} [props.width=300]  - コンポーネントの幅
 * @param {number} [props.height=300] - コンポーネントの高さ
 * @param {number} [props.circleRadius=100] - 円の半径
 */
function BreastDrawingKonva({
  label = '乳房',
  width = 300,
  height = 300,
  circleRadius = 100,
}) {
  // 描いた線（Line）の配列をステート管理
  const [lines, setLines] = useState([]);
  // ドラッグしている最中かどうか
  const isDrawing = useRef(false);
  // Stage の参照
  const stageRef = useRef(null);

  // マウス/タッチ押下時
  const handleMouseDown = (e) => {
    isDrawing.current = true;
    const pos = e.target.getStage().getPointerPosition();
    setLines((prevLines) => [...prevLines, { points: [pos.x, pos.y] }]);
  };

  // マウス/タッチ移動時
  const handleMouseMove = (e) => {
    if (!isDrawing.current) return;
    const stage = e.target.getStage();
    const point = stage.getPointerPosition();
    setLines((prevLines) => {
      const lastLine = prevLines[prevLines.length - 1];
      const newPoints = [...lastLine.points, point.x, point.y];
      const updatedLine = { ...lastLine, points: newPoints };
      return [...prevLines.slice(0, -1), updatedLine];
    });
  };

  // マウス/タッチ離したとき
  const handleMouseUp = () => {
    isDrawing.current = false;
  };

  // クリアボタン
  const handleClear = () => {
    setLines([]);
  };

  // 保存（例: JSON で console.log）
  const handleSave = () => {
    const dataToSave = JSON.stringify(lines);
    console.log(`${label} の描画データ:`, dataToSave);
    // 例: localStorage へ保存
    // localStorage.setItem(`${label}-breastDrawing`, dataToSave);
    // またはバックエンドへ送信など
  };

  // （例）ロードボタン
  const handleLoad = () => {
    // もし localStorage などから読み込む場合はここで parse して setLines
    // const loaded = localStorage.getItem(`${label}-breastDrawing`);
    // if (loaded) {
    //   setLines(JSON.parse(loaded));
    // }
  };

  return (
    <Box sx={{ mb: 2 }}>
      <h4 style={{ textAlign: 'center' }}>{label}</h4>

      <Stage
        ref={stageRef}
        width={width}
        height={height}
        onMouseDown={handleMouseDown}
        onMousemove={handleMouseMove}
        onMouseup={handleMouseUp}
        onTouchStart={handleMouseDown}
        onTouchMove={handleMouseMove}
        onTouchEnd={handleMouseUp}
        style={{ border: '1px solid #aaa', borderRadius: '4px' }}
      >
        <Layer>
          {/* 円（乳房イメージ） */}
          <Circle
            x={width / 2}
            y={height / 2}
            radius={circleRadius}
            fill="#f8f8f8"
            stroke="#666"
            strokeWidth={2}
          />
          {/* 12, 3, 6, 9 の文字 */}
          <Text
            x={width / 2 - 10}
            y={height / 2 - circleRadius - 20}
            text="12"
            fontSize={16}
            fill="#000"
          />
          <Text
            x={width / 2 + circleRadius + 5}
            y={height / 2 - 10}
            text="3"
            fontSize={16}
            fill="#000"
          />
          <Text
            x={width / 2 - 10}
            y={height / 2 + circleRadius + 5}
            text="6"
            fontSize={16}
            fill="#000"
          />
          <Text
            x={width / 2 - circleRadius - 20}
            y={height / 2 - 10}
            text="9"
            fontSize={16}
            fill="#000"
          />

          {/* 描いた線たち */}
          {lines.map((line, i) => (
            <Line
              key={i}
              points={line.points}
              stroke="red"
              strokeWidth={3}
              lineCap="round"
              lineJoin="round"
              tension={0}
            />
          ))}
        </Layer>
      </Stage>

      {/* ボタン類 */}
      <Box sx={{ mt: 1, textAlign: 'center' }}>
        <Button variant="contained" onClick={handleSave} sx={{ mr: 1 }}>
          保存
        </Button>
        <Button variant="outlined" onClick={handleClear} sx={{ mr: 1 }}>
          クリア
        </Button>
        <Button variant="outlined" onClick={handleLoad}>
          （例）ロード
        </Button>
      </Box>
    </Box>
  );
}

export default BreastDrawingKonva;
