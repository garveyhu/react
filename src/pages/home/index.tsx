import './index.less';

const Input = () => {
  return (
    <>
      <h1 className="text-center">标题</h1>
      <h2 className="text-center">Find what you need</h2>
      <h3 className="text-center">what are you looking for?</h3>
      <h4 className="text-center">Search for items, articles, or anything else</h4>
      <hr />
      <p className="text-center">
        请输入搜索内容,
        <br />
        新的一行
      </p>
      <div className="text-center">
        <input type="text" className="text-center" />
      </div>
    </>
  );
};

export default Input;
