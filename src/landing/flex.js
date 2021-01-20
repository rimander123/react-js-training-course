export const Flex = (props) => {
  let styleResult = { display: "flex" };
  if (props.margin) styleResult.margin = props.margin;
  if (props.padding) styleResult.padding = props.padding;
  if (props.width) styleResult.width = props.width;
  if (props.height) styleResult.height = props.height;
  if (props.maxWidth) styleResult.maxWidth = props.maxWidth;
  if (props.maxHeight) styleResult.maxHeight = props.maxHeight;
  if (props.minWidth) styleResult.minWidth = props.minWidth;
  if (props.minHeight) styleResult.minHeight = props.minHeight;
  if (props.justifyContent) styleResult.justifyContent = props.justifyContent;
  if (props.flexDirection) styleResult.flexDirection = props.flexDirection;
  if (props.flexGrow) styleResult.flexGrow = props.flexGrow;
  if (props.flexBasis) styleResult.flexBasis = props.flexBasis;
  if (props.flexShrink) styleResult.flexShrink = props.flexShrink;
  if (props.flexWrap) styleResult.flexWrap = props.flexWrap;
  if (props.flex) styleResult.flex = props.flex;
  if (props.alignItems) styleResult.alignItems = props.alignItems;
  return (
    <div className={props.className} style={styleResult}>
      {props.children}
    </div>
  );
};
