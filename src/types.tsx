export interface propsTypes {
  children: JSX.Element;
}
export interface ModalProps {
  open: boolean;
  content: React.ReactElement<any, any> | undefined;
  contentProps?: object;
}
