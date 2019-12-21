import React from "react";
import renderer from 'react-test-renderer';
import {useStyles, useNamedStyles} from "./useStyles";

function TestComponent() {
  let classes = useStyles({root: {color: "red"}});

  return <div className={classes.root}/>
}

test("useStyles returns classes object", () => {
  const component = renderer.create(
    <TestComponent />,
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  // @ts-ignore
  expect(tree.props.className).toBe("makeStyles-root-1");
});



function Test2Component() {
  let classes = useNamedStyles("Test2", {root: {color: "red"}});

  return <div className={classes.root}/>
}

test("useNamedStyles returns classes object", () => {
  const component = renderer.create(
    <Test2Component />,
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  // @ts-ignore
  expect(tree.props.className).toBe("Test2-root-2");
});
