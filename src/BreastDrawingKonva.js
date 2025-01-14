/**
 * BreastDrawingKonva.js
 *
 * react-konva を用いて「乳房の円」上にフリーハンドで描画できるコンポーネント例
 */

import React, { useState, useRef } from 'react';
import { Stage, Layer, Circle, Line, Text } from 'react-konva';
import { Box, Button } from '@mui/material';

function BreastDrawingKonva() {
  // 描いた線（Line）の配列をステート管理
  const [lines, setLines] = useState([]);
  // ドラッグしている最中かどうかのフラグ
  const isDrawing = useRef(false);
  // Stage の参照
  const stageRef = useRef(null);

  // マウス/タッチ押下時
  const handleMouseDown = (e) => {
    isDrawing.current = true;
    // 現在のステージ上のポインター座標を取得
    const pos = e.target.getStage().getPointerPosition();
    // 新しい線を追加
    setLines((prevLines) => [...prevLines, { points: [pos.x, pos.y] }]);
  };

  // マウス/タッチ移動時
  const handleMouseMove = (e) => {
    if (!isDrawing.current) return; // 描画中でなければ無視

    const stage = e.target.getStage();
    const point = stage.getPointerPosition();
    // 現在の線（最後の線）を取り出し、移動先座標を追加
    setLines((prevLines) => {
      const lastLine = prevLines[prevLines.length - 1];
      const newPoints = [...lastLine.points, point.x, point.y];

      // 最後の線だけ座標を更新
      const updatedLine = { ...lastLine, points: newPoints };
      // それ以外の線はそのまま
      const newLines = [...prevLines.slice(0, -1), updatedLine];
      return newLines;
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

  // 保存ボタン（JSON などに変換してバックエンド保存も可能）
  const handleSave = () => {
    const dataToSave = JSON.stringify(lines);
    console.log('描画データ:', dataToSave);
    // 例: localStorage に保存
    // localStorage.setItem('breastDrawing', dataToSave);
    // あるいは GraphQL Mutation で保存など
  };

  // （オプション）ロードボタン例
  const handleLoad = () => {
    // localStorage から読み出したり、バックエンドから取得して parse してセット
    // const loaded = localStorage.getItem('breastDrawing');
    // if (loaded) {
    //   setLines(JSON.parse(loaded));
    // }
  };

  return (
    <Box sx={{ mb: 4 }}>
      <h3>react-konva で乳房図にフリーハンド描画</h3>

      {/* Stage: 描画領域全体 */}
      <Stage
        ref={stageRef}
        width={400}      // Canvas 幅
        height={400}     // Canvas 高さ
        onMouseDown={handleMouseDown}
        onMousemove={handleMouseMove}
        onMouseup={handleMouseUp}
        onTouchStart={handleMouseDown}
        onTouchMove={handleMouseMove}
        onTouchEnd={handleMouseUp}
        style={{ border: '1px solid #ccc' }}
      >
        <Layer>
          {/* 円（乳房イメージとしての背景） */}
          <Circle
            x={200}          // Canvas中央に配置
            y={200}
            radius={150}     // 円の半径
            fill="#f8f8f8"   // 円の背景色
            stroke="#aaa"    // 円の枠線
            strokeWidth={2}
          />
          {/* 例: 12,3,6,9 時の目盛り用テキスト (任意に追加) */}
          <Text x={195} y={50}  text="12" fontSize={20} fill="#000" />
          <Text x={345} y={195} text="3"  fontSize={20} fill="#000" />
          <Text x={195} y={345} text="6"  fontSize={20} fill="#000" />
          <Text x={50}  y={195} text="9"  fontSize={20} fill="#000" />

          {/* 描いた線を表示 (Line) */}
          {lines.map((line, i) => (
            <Line
              key={i}
              points={line.points}
              stroke="#FF0000"
              strokeWidth={3}
              lineCap="round"
              lineJoin="round"
              tension={0}
            />
          ))}
        </Layer>
      </Stage>

      <Box sx={{ mt: 1 }}>
        <Button variant="contained" onClick={handleSave} sx={{ mr: 2 }}>
          描画内容を保存
        </Button>
        <Button variant="outlined" onClick={handleClear} sx={{ mr: 2 }}>
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
