import React, { useState } from 'react';

const Home = () => {
    const [count, setCount] = useState(0);

    return (
      <div>
          This is home page! {count}
      </div>
    );
}

export default Home;