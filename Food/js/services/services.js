"use strict";

//

  // use async to wait for promise to resolve, must be used with await
  const postData = async (url, data) => {
    // await will wait for any responce
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: data,
    });
    return await res.json();
  };


  const getResorces = async (url) => {
    // await will wait for any responce
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }
    return await res.json();
  };


  export {postData};
  export {getResorces};