const rootElement = document.querySelector('.root');

const jsxElement = <h1>Hello Wilág!</h1>

ReactDOM.render(jsxElement, rootElement);

const headerStyle = {
    backgroundColor: '#61DBFB',
    fontFamily: 'Helvetica Neue',
    padding: 25,
    lineHeight: 1.5,
    borderRadius: '25px',
    paddingLeft: 150
};
const name = "Henrik";
const header = (
  <header
  style={headerStyle}>
    <h1>Welcome to 30 Days Of React</h1>
    <h2>Getting Started React</h2>
    <h3>JavaScript Library</h3>
    <p>Asabeneh Yetayeh</p>
    <small>Oct 2, 2020</small>
    <p>{name}</p>
  </header>
);


const mainStyle = {
    backgroundColor: '#AAAAAA',
    fontFamily: 'Helvetica Neue',
    padding: 25,
    borderRadius: '25px',
    clear:"both",
    paddingLeft: 150

};

const ulData = ['1','2','3']
const ulDataFormatted = ulData.map((d) => <li key={d}>{d}</li>);
const main = (
    <main style={mainStyle}>
        <p> Main content: </p>
        <ul>{ulDataFormatted}</ul>
    </main>
);


const footerStyle = {
    position: "fixed",
    bottom:0,
    right: 0,
    left:0,
    backgroundColor: '#61DBFB',
    padding: 20,
    borderRadius: '25px',
    display:"flex",
    justifyContent:"center"
};

const footer = (
    <footer style={footerStyle}>
        <p>Copyright 2021</p>
    </footer>
);

const app = (
    <div className="container">
        {header}
        {main}
        {footer}
    </div>
);

ReactDOM.render(app, rootElement);