type Props = {
    setNumber: (num: number) => void
}

const Child: React.FC<Props> = (props: Props) => {
    const { setNumber } = props

  const handleClick = () => setNumber(4);

  return (
    <div>
        <button onClick={handleClick}>Click here to set the number to 4</button>
        <p>This number is inputted in the child component and passed to the parent component.</p>
    </div>
  )
}

export default Child;