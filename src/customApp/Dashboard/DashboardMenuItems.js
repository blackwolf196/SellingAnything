const menuItem = [
  {
    key: '',
    label: 'Trang chủ'
  },
  {
    key: 'gioi-thieu',
    label: 'Giới thiệu'
  },
  {
    key: 'san-pham',
    label: 'Sản phẩm',
    children: [
      {
        key: 'coc-su',
        label: 'Cốc cà phê'
      },
      {
        key: 'ao-phong',
        label: 'Áo phông'
      },
      {
        key: 'giay-nam',
        label: 'Giày nam'
      },
      {
        key: 'giay-nu',
        label: 'Giày nữ'
      },
      {
        key: 'san-pham-khac',
        label: 'Sản phẩm khác'
      },
    ]
  },
  {
    key: 'lien-he',
    label: 'Liên hệ'
  },
  {
    key: 'components',
    label: 'Components',
    children: [
      {
        key: 'clock',
        label: 'Clock'
      }
    ]
  }
];

export default menuItem;