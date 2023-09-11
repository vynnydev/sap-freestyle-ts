import React from 'react'

type Props = {
  error: string
  reload: () => void
}

const Error: React.FC<Props> = ({ error, reload }: Props) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#ffffff',
        padding: '40px',
        alignItems: 'center',
        textAlign: 'center',
        borderRadius: '8px',
        boxShadow: '0px 1px 3px -1px #000000',
      }}
    >
      <span
        style={{
          fontSize: '20px',
          marginBottom: '24px',
        }}
        data-testid="error"
      >
        {error}
      </span>
      <button data-testid="reload" onClick={reload}>
        Tentar novamente
      </button>
    </div>
  )
}

export default Error
