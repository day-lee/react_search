const List = ({ list }) => {
  return (
    <div className="card-background">
      <ul>
        {list.map((item) => {
          return (
            <div className="card" key={item.id}>
              <li key={item.id}>
                <p className="title">
                  <a href={item.url}>{item.title}</a>
                </p>

                <p>
                  <span>Author: </span> {item.author}
                </p>

                <p>
                  <span># of Comment: </span>
                  {item.comments}
                </p>
                <p>
                  {" "}
                  <span># of Point: </span>
                  {item.point}
                </p>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default List;
