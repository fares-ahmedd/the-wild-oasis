function Empty({ resource }) {
  return (
    <p>
      No <span style={{ fontWeight: "900" }}>{resource}</span> could be found.
    </p>
  );
}

export default Empty;
