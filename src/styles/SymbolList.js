import * as color from "./colors";

export const customStyles = {
  container: styles => ({
    ...styles,
    width: "100%",
    "@media(max-width: 700px)": { position: "unset" },
  }),
  control: () => ({
    cursor: "default",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    minHeight: 38,
    position: "relative",
    transition: "all 100ms",
    alignItems: "left",
    border: "none",
    "@media(max-width: 700px)": { fontSize: ".7rem" },
  }),
  dropdownIndicator: styles => ({
    ...styles,
    "@media(max-width: 700px)": { display: "none" },
  }),
  indicatorSeparator: () => ({ display: "none" }),
  loadingIndicator: () => ({ display: "none" }),
  menu: styles => ({
    ...styles,
    textAlign: "left",
    borderRadius: "4px",
    color: `${color.celloBlack}`,
    "@media(max-width: 700px)": { left: 0 },
  }),
  placeholder: styles => ({
    ...styles,
    color: `${color.celloBlack}`,
  }),
};
