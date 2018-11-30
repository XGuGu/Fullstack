export const fetchAllPins = (userId, description) => {
  // debugger
  return $.ajax({
    method: 'GET',
    url: '/api/pins',
    // data: {
    //   userId   shangmian shi userId
    // }
    data: {
      userId,
      description,
    }
  });
};


export const fetchPin = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/pins/${id}`
  });
};


export const createPin = (pin, boardId) => {
  return $.ajax({
    method: 'POST',
    url: '/api/pins',
    data: {
      pin,
      boardId,
    }
  });
};


export const updatePin = (pin) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/pins/${pin.id}`,
    data: {pin}
  });
};

export const deletePin = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/pins/${id}`
  });
};
