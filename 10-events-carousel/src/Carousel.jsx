import React from 'react';
import cn from 'classnames';
import _ from 'lodash';

// BEGIN (write your solution here)
export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      images: props.images.map((url) => {
        const key = `${url}_${_.uniqueId()}`;
        return { url, key };
      }),
    };
  }

  clickHandler = (e) => {
    e.preventDefault();
    const direction = e.currentTarget.dataset.slide;
    const { images } = this.state;

    switch (direction) {
      case 'prev':
        this.setState((state) => ({
          activeIndex: (state.activeIndex + (images.length - 1)) % images.length,
        }));
        break;

      case 'next':
        this.setState((state) => ({
          activeIndex: (state.activeIndex + 1) % images.length,
        }));
        break;

      default:
        throw new Error(`Unknown direction: ${direction}`);
    }
  };

  render() {
    const { activeIndex, images } = this.state;

    const carouselItems = images.map(({ url, key }, i) => {
      const itemClass = cn({
        'carousel-item': true,
        active: activeIndex === i,
      });

      return (
        <div key={key} className={itemClass}>
          <img alt="" className="d-block w-100" src={url} />
        </div>
      );
    });

    return (
      <div id="carousel" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          {carouselItems}
        </div>
        <a onClick={this.clickHandler} className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" />
          <span className="sr-only">Previous</span>
        </a>
        <a onClick={this.clickHandler} className="carousel-control-next" href="#carousel" role="button" data-slide="next">
          <span className="carousel-control-next-icon" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}
// END
