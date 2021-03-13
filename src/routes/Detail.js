import React from 'react'

class Detail extends React.Component {
    //사용자가 직접 url을 입력하면 location 키의 state가 undefined 로 비니까
    //그런 경우만 history키의 push()함수를 사용하자 
    
    componentDidMount(){
        const { location, history } = this.props;
        if(location.state === undefined) {
            //home으로 이동
            history.push('/');
        }
    }

    render() {
        const { location } = this.props;
        if(location.state){
            return <span>{location.state.title}</span>
        }else {
            return null;
        }       
    }
}

export default Detail;
