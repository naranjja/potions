import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        primary: {
          main: '#14A284'
        }
    },
    components: {
        MuiAppBar: {
            variants: [{
                props: { variant: "app-bar" },
                style: {
                    backgroundColor: "#14A284",
                    boxShadow: "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",
                }
            }, {
                props: { variant: "footer" },
                style: {
                    backgroundColor: "#2F2F2F",
                }
            }],
        },
        MuiButton: {
            variants: [{
                props: { color: "primary" },
                style: {
                    backgroundColor: "rgba(0, 0, 0, 0.08)",
                    color: "black",
                    "&:hover": {
                        backgroundColor: "rgba(0, 0, 0, 0.1)",
                    }
                },
            }]
        },
        MuiTypography: {
            variants: [{
                props: { variant: "app-title" },
                style: {
                    fontSize: 30,
                    fontWeight: 400,
                }
            }, {
                props: { variant: "footer" },
                style: {
                    fontSize: 20,
                    fontWeight: 300,
                }
            }, {
                props: { variant: "page-title" },
                style: {
                    fontSize: 20,
                    fontWeight: 300,
                }
            }, {
                props: { variant: "recipe-title" },
                style: {
                    fontSize: 30,
                    fontWeight: 400,
                    textAlign: "center",
                }
            }, {
                props: { variant: "recipe-card-title" },
                style: {
                    fontSize: 22,
                    fontWeight: 400,
                }
            }, {
                props: { variant: "headline" },
                style: {
                    fontWeight: 400,
                }
            }, {
                props: { variant: "title" },
                style: {
                    fontWeight: 400,
                }
            }, {
                props: { variant: "comment" },
                style: {
                    fontWeight: 300,
                    fontSize: 14,
                }
            }, {
                props: { variant: "ingredient" },
                style: {
                    fontWeight: 300,
                    fontSize: 16,
                }
            }, {
                props: { variant: "vessel" },
                style: {
                    fontWeight: 300,
                    fontSize: 16,
                }
            }]
        }
    }
});