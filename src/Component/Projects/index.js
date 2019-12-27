import React, { useState } from 'react';

const Project = () => {
    const [count, setCount] = useState(0);

    return (
      <div>
          This is Project! {count}
      </div>
    );
}

export default Project;