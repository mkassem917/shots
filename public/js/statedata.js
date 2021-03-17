// fetch for state data, testing with hard corded location

const getUser= (user) => {
    userId = user || '';
    if (userId) {
      userId = `/?user_id=${1}`;
    }

    fetch(`/api/posts${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success in getting posts:', data);


  })}