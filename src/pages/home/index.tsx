import './index.less';

const Input = () => {
  return (
    <>
      <h1 className="text-center">标题</h1>
      <h2 className="text-center subtitle">Find what you need</h2>
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
        <br /> <br />
        <span className="text-center">这是一个span元素</span>
        <span className="text-center">这是另一个span元素</span> <br />
        <p>这是一个HTML的&lt;p&gt;元素</p>
      </div>
      <div className="text-center">
        <u>这是一个下划线文本</u>
        <s>这是一个删除线文本</s>
        <i>这是一个斜体文本</i>
        <mark>这是一个高亮文本</mark>
        <p>
          CuSO<sub>4</sub> <br /> O<sup>2</sup>
        </p>
      </div>
    </>
  );
};

export default Input;
