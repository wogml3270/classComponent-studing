import { Component } from "react";

// props 타입 정의
// title은 선택적 프로퍼티로, title뒤에 ?를 통해 string 타입이거나 제공하지 않아도 됨
interface ComponentProps {
  title?: string;
}

// state의 타입 정의
// count는 필수 프로퍼티로, number 타입으로 지정
interface ComponentState {
  count: number;
}

// 컴포넌트에서 <propsType, stateType>를 상속받는 클래스를 정의
// 이때 propsType과 stateType에는 앞서 정의한 interface를 지정
class Constructor extends Component<ComponentProps, ComponentState> {
  // 컴포넌트의 생성자 함수
  // props를 인자로 받고, super()를 호출하여 부모 클래스의 생성자 함수를 실행
  // state를 초기화하며, count의 기본값을 0으로 설정
  constructor(props: ComponentProps) {
    super(props); // super 메소드로 react 컴포넌트의 생성자를 호출
    this.state = {
      count: 0, // 처음에 렌더링 될 count 상태 초기값을 설정
    };
  }

  // count 상태를 5 감소시키는 메소드
  decrement = (): void => {
    this.setState({ count: this.state.count - 5 });
  };

  // count 상태를 10 증가시키는 메소드
  // state의 this 바인딩을 사용하지 않고 화살표 함수로 작성
  increment = (): void => {
    this.setState((prev) => ({ count: prev.count + 10 }));
  };

  // 컴포넌트의 렌더링을 담당하는 생명주기 메소드
  // jsx를 반환하여 화면에 렌더링 될 내용을 정의
  render() {
    return (
      <div>
        <h1>props의 title : {this.props.title}</h1>
        <p>상태가 변경될 때마다 렌더링되어 보여지는 요소: {this.state.count}</p>
        <button onClick={this.decrement}>-5 감소</button>
        <button onClick={this.increment}>+10 증가</button>
      </div>
    );
  }
}

export default Constructor;
