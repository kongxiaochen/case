var TestClickComponent=React.createClass({
	  handleClick:function(event){

	    var tipE=ReactDOM.findDOMNode(this.refs.tip);

	    if(tipE.style.display==='none'){
	      tipE.style.display='inline';
	    }else{
          tipE.style.display='none';
	    }

	    event.stopPropagation();
	    event.preventDefault();  
	  },
	  render:function(){
	    return(
	    	<div>
	    		<button onClick={this.handleClick}>显示|隐藏</button><span ref='tip'>测试点击</span>
	    	</div>
	    );
	  }
	});
var TestInputComponent=React.createClass({
	getInitialState:function(){ 
		return {inputContent:''};
	},
	handleChange:function(event){

		this.setState({
			inputContent:event.target.value;
		});

		event.stopPropagation();
		event.preventDefault();
	},
	render:function(){
        return (
        	<div>
        		<input type="text" onChange={this.handleChange}/><span>{this.state.inputContent}</span>
        	</div>
        );
	}
})

ReactDOM.render(<div>
                 <TestClickComponent/>
                 <TestInputComponent/>
                </div>,
                document.getElementById('container'));

var GalleryByReactApp=React.createClass({
	render:function(){
		return (
			<section className="stage">
			  <section className="img-sec">
			  </section>
			  <nav className="controller-nav"></nav>
			</section>
	    )
	}
})

ReactDOM.render(<GalleryByReactApp/>,document.getElementById('app'));

/*class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <img src={yeomanImage} alt="Yeoman Generator" />
        <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;*/
