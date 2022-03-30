const AddressResolver = ({ address, ...rest }) => {
  const beautifyAddress = (address) =>
    `${address.substring(0, 6)}...${address.substring(
      address.length - 6,
      address.length
    )}`;

  return <div {...rest}>{beautifyAddress(address)}</div>;
};

export default AddressResolver;
