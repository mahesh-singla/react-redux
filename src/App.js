import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "./store/actions/posts";

class App extends Component {
    componentWillMount() {
        this.props.fetchPosts();
    }
    render() {
        return (
            <div className="posts_container">
                <h1>Posts</h1>
                {this.props.posts.map((post) => (
                    <div key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    posts: state.posts.items,
});

const mapDispatchToProps = (dispatch) => ({
    fetchPosts: () => dispatch(fetchPosts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
