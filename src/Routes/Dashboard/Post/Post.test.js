import React from "react";
import { render } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import Post from "./Post";

describe("Post", () => {
  let postComponent;
  const props = {
    user: {
      id: 1,
      username: "R2B2",
    },
    post: {
      title: "Hello world",
      body: "Hello world to R2B2",
    },
  };

  beforeEach(() => {
    const history = createMemoryHistory();
    postComponent = render(
      <Router history={history}>
        <Post {...props} />
      </Router>
    );
  });

  it("should render a sinlge blog post", () => {
    expect(postComponent.container).toBeDefined();
  });

  it("should render a blog post title", () => {
    expect(postComponent.getByText(props.post.title)).toBeInTheDocument();
  });

  it("should render a post body", () => {
    expect(postComponent.getByText(props.post.body)).toBeInTheDocument();
  });

  it("should render AuthorNameButton", () => {
    expect(
      postComponent.getByTestId(`author-btn-${props.user.id}`)
    ).toBeInTheDocument();
  });
});
