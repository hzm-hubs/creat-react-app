import { createBrowserHistory } from "history";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";

const history = createBrowserHistory();

export { HistoryRouter, history };

// 在非组件页面，可以通过 history 进行跳转或者路由信息，
