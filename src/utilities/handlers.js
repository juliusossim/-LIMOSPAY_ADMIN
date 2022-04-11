import _ from 'lodash';
import { slugToString, stringDoesNotExist } from './stringOperations';
import { validateField } from './validation';

export const changeHandler = ({
  e, setFormData, setProgress, setCurrentName, dispatch
}) => {
  const {
    name, value, files, apiValue
  } = e?.target;
    let val = value;
    if (name === 'projectType' || name === 'categoryId') {
      val = Number(val);
    }
    setFormData((state) => ({
      ...state,
      ...replacedName(name, apiValue),
      [name]: val
    }));
  return true;
};

export const blurHandler = ({
  e, validations, setErrors, errors
}) => {
  const { name, value } = e.target;
  const field = slugToString(name);
  if (typeof field !== 'undefined') {
    setErrors(
      {
        ...errors,
        [name]: (
          validateField(validations, field, value)
        )
      }
    );
  }
};

export const checkHandler = ({ e, setFormData, formData }) => {
  const { name } = e.target;

  setFormData({
    ...formData,
    [name]: formData[name] === 1 ? 0 : 1
  });
};

export const replacedName = (name, apiValue) => {
  if (apiValue) {
    return ({ [`${name}_id`]: apiValue });
  }
  return false;
};

export const tagsHandler = ({
  e, formData, setFormData, setVal
}) => {
  const { value, name } = e.target;
  if (e.keyCode === 188) {
    setFormData({
      ...formData,
      [name]: [...formData[name], value]
    });
    setVal('');
  }
};

export const dragHandler = (e) => {
  e?.preventDefault();
  e.stopPropagation();
};
export const dragInHandler = (e, dragCounter, setDragCounter, setDrag) => {
  e.preventDefault();
  e.stopPropagation();
  setDragCounter(dragCounter + 1);
  if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
    setDrag(true);
  }
};
export const dragOutHandler = (e, dragCounter, setDragCounter, setDrag) => {
  e.preventDefault();
  e.stopPropagation();
  setDragCounter(dragCounter - 1);
  if (dragCounter === 0) {
    setDrag(false);
  }
};
export const dropHandler = (e, dragCounter, setDragCounter, setDrag, handleDrop) => {
  e.preventDefault();
  e.stopPropagation();
  setDrag(false);
  if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
    handleDrop(e.dataTransfer.files);
    e.dataTransfer.clearData();
    setDragCounter(0);
  }
};
// handleDrop = (files) => {
//   let fileList = this.state.files
//   for (var i = 0; i < files.length; i++) {
//     if (!files[i].name) return
//     fileList.push(files[i].name)
//   }
//   this.setState({files: fileList})
// }
