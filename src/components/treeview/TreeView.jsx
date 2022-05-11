import './treeview.css';
import TreeNode from '../treenode/TreeNode';
import { utilService } from '../../service/util.service';

const TreeView = ({ data, filterBy }) => {
  const filterData = (data) => {
    if (!filterBy) return data;

    return data.reduce((acc, node) => {
      if (!node.children || !node.children.length) {
        node.name.includes(filterBy) && acc.push(node);
      } else {
        const filtered = filterData(node.children);
        filtered.length && acc.push(...filtered);
      }
      return acc;
    }, []);
  };

  const filteredArray = filterData(data);

  return (
    <div className='treeview-root'>
      <ul>
        {filteredArray.map((tree) => (
          <TreeNode key={utilService.makeId()} node={tree} />
        ))}
      </ul>
    </div>
  );
};

export default TreeView;
