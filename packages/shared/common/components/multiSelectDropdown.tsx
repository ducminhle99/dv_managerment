import { Select, SelectProps, Tag } from 'antd';
import { CloseCircleFilled } from '@ant-design/icons';
import { DropdownIcon } from 'common/components/icons';

function tagRender(props: any) {
  const { label, closable, onClose } = props;

  const onPreventMouseDown = (event: any) => {
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <Tag
      className="mr-2 whitespace-nowrap text-[15px] bg-gray-darker-1 px-1 rounded relative group"
      onMouseDown={onPreventMouseDown}
      closable={closable}
      onClose={onClose}
      closeIcon={<CloseCircleFilled className="absolute z-10 -top-2 -right-2 hidden group-hover:block border-none" />}
    >
      {label}
    </Tag>
  );
}

const MultiSelectDropdown = (selectProps: SelectProps) => {
  return (
    <Select
      {...selectProps}
      tagRender={tagRender}
      maxTagPlaceholder={(value) => {
        return <p className="text-sm">+{value.length}</p>;
      }}
      suffixIcon={<DropdownIcon />}
    />
  );
};

export default MultiSelectDropdown;
