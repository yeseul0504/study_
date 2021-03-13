import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css';

class Home extends React.Component {
  //영화 앱 데이터의 상태(컴포넌트가 마운트 되면 true)
  state = {
    isLoading: true,
    movies: [],
  };

  //api 받아오기
  //axios는 네트워크를 사용하므로 느리게 동작
  getMovies = async () => {
    const {
      data : {
        data: { movies },
      },
          } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
    //           ({state : axiosget()의 결과를 담을 변수})=>this.setState({movies})로 축약가능
    // this.setState({ movies:movies})
    this.setState({movies, isLoading: false})
  };
  
  //getMovies()함수 기다린다음 axios.get()함수가 반환한 데이터 잡기
  //componentDidMount함수가 실행되면 this.getMovies()가 실행됨
  //이제 자바스크립트에게 'getMovies()함수가 시간이 걸린다고 말해야만 
  //axios.get()이 반환데이터를 제대로 잡을수있다.-> async(비동기), await(기다렷다 끝나면 진행해줘) 필요
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
      return (
        <section className="container">
          {isLoading ? (
            <div className="loader">
              <span className="loader__text">Loading...</span>
            </div>
           ) : (
             <div className="movies">
             {movies.map(movie => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
              ))}
              </div>
      )}
        </section>
      )
     }
  }

export default Home;
