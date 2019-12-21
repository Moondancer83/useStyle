import {useNamedStyles, useStyles} from "../src/useStyles";

function useStyleReturnsTypeSafeObject() {

  let styles = {
    root: {
      backgroundColor: "red"
    }
  };

  let useStyles1 = useStyles(styles);
  let root: string = useStyles1.root;

  console.log(useStyles1.root);
}

function useNamedStyleReturnsTypeSafeObject() {

  let styles = {
    root: {
      backgroundColor: "red"
    }
  };

  let useStyles1 = useNamedStyles("Custom", styles);
  let root: string = useStyles1.root;

  console.log(useStyles1.root);
}