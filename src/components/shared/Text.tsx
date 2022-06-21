// eslint-disable-next-line no-useless-escape
const URL_REGEX = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gm

interface Props {
  text: string
}

export const Text = ({ text }:Props) => {
  const words = text.split(' ')
  return (
    <div>
      {words.map((word, key) => {
        if (word.match(URL_REGEX)) {
          return <a key={key} target='_blank' rel='noreferrer' className="text-[#1d9bf0]" href={`https://${word}`}>{word}</a>
        }
        if (word.includes('@')) {
          return <span key={key} className="text-[#1d9bf0] mr-1">{word}</span>
        }
        if (word.includes('#')) {
          return <span key={key} className="text-[#1d9bf0] mr-1">{word}</span>
        }
        return word + ' '
      })}
    </div>
  )
}
