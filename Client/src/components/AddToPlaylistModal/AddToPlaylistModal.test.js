//write test case that component is rendered
const { shallow } = require('enzyme');
const AddToPlaylistModal = require('../AddToPlaylistModal');g
test('AddToPlaylistModal component is rendered', () => {
    const wrapper = shallow(<AddToPlaylistModal />);
    expect(wrapper).toMatchSnapshot();
    }
);
//write test case that component is rendered