import { tipsData } from "../../../data/tipsData";
import ArticleItem from "./ArticleItem";

const ArticlesView = () => {
  return (
    <div>
      <div className="d-flex flex-row flex-wrap justify-content-around align-items-center">
        {tipsData.map((a) => (
          <ArticleItem key={a.id} {...a} />
        ))}
      </div>
    </div>
  );
};

export default ArticlesView;
