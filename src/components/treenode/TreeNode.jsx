import { useState } from 'react';
import Tree from '../treeview/TreeView';
import { AiOutlineFolderAdd, AiOutlineFileWord } from 'react-icons/ai';

import './treenode.css';

const TreeNode = ({ node }) => {
  const [isClicked, setIsClicked] = useState(false);

  const hasChildren = node.children ? true : false;

  return (
    <li>
      <div className='folder' onClick={(e) => setIsClicked((isClicked) => !isClicked)}>
        {hasChildren ? <AiOutlineFolderAdd size={30} /> : <AiOutlineFileWord size={30} />}
        <div className='folder-name'>{node.name}</div>
      </div>
      {hasChildren && isClicked && (
        <ul className='tree'>
          <Tree data={node.children} />
        </ul>
      )}
    </li>
  );
};

export default TreeNode;
