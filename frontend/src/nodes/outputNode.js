import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data?.outputType || 'Text');

  return (
    <BaseNode
      title="Output"
      handles={[{ id: `${id}-value`, type: 'target', position: Position.Left }]}
      width={220}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <label style={{ fontSize: 12 }}>
          Name:
          <input value={currName} onChange={(e) => setCurrName(e.target.value)} style={{ marginLeft: 8 }} />
        </label>
        <label style={{ fontSize: 12 }}>
          Type:
          <select value={outputType} onChange={(e) => setOutputType(e.target.value)} style={{ marginLeft: 8 }}>
            <option value="Text">Text</option>
            <option value="Image">Image</option>
          </select>
        </label>
      </div>
    </BaseNode>
  );
};
