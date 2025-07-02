export const getInitialLikes = () => {
  const savedData = localStorage.getItem('sliderLikes');
  if (savedData) {
    try {
      const data = JSON.parse(savedData);
      return {
        likes: data.likes || {},
        dislikes: data.dislikes || {}
      };
    } catch (error) {
      console.error('Error parsing saved likes:', error);
      return { likes: {}, dislikes: {} };
    }
  }
  return { likes: {}, dislikes: {} };
};

export const saveLikes = (data) => {
  try {
    localStorage.setItem('sliderLikes', JSON.stringify(data));
    return true;
  } catch (error) {
    console.error('Error saving likes:', error);
    return false;
  }
};
