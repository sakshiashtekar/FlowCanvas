import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data?.inputType || 'Text');

  return (
    <BaseNode
      title="Input"
      handles={[{ id: `${id}-value`, type: 'source', position: Position.Right }]}
      width={220}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <label style={{ fontSize: 12 }}>
          Name:
          <input
            style={{ marginLeft: 8 }}
            type="text"
            value={currName}
            onChange={(e) => setCurrName(e.target.value)}
          />
        </label>
        <label style={{ fontSize: 12 }}>
          Type:
          <select value={inputType} onChange={(e) => setInputType(e.target.value)} style={{ marginLeft: 8 }}>
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </label>
      </div>
    </BaseNode>
  );
};
