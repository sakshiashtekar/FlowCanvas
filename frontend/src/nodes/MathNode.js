import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const MathNode = ({ id }) => {
  const [expr, setExpr] = useState('a + b');

  return (
    <BaseNode title="Math" handles={[{ id: `${id}-in1`, type: 'target', position: Position.Left }, { id: `${id}-out`, type: 'source', position: Position.Right }]} width={240}>
      <div>
        <label style={{ fontSize: 12 }}>Expression:
          <input value={expr} onChange={(e) => setExpr(e.target.value)} style={{ marginLeft: 8 }} />
        </label>
        <div style={{ marginTop: 6, fontSize: 12, color: '#555' }}>Evaluates a math expression with incoming variables</div>
      </div>
    </BaseNode>
  );
};
