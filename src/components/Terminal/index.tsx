import clsx from "clsx"
import * as Dialog from '@radix-ui/react-dialog';
import { useMemo } from "react"
import { useEffect, KeyboardEvent, useRef, useState } from "react"
import { ProjectsSections } from "../ProjectsSections"

const WELCOME = [
  {
    type: 'response',
    content: 'Bem vindo ao devlevi 0.0.2 LTS (Next.js/Vercel 13.2.4-next tailwindcss)'
  },
  {
    type: 'response',
    content: '<br/>'
  },
  {
    type: 'response',
    content: '* Github:  <a href="https://github.com/asleeplevi">https://github.com/asleeplevi</a>'
  },
  {
    type: 'response',
    content: '<p>* Linkedin:  <a href="https://www.linkedin.com/in/levi-me/">https://www.linkedin.com/in/levi-me/</a></p>'
  },
  {
    type: 'response',
    content: '<p>* Email:  <a href="mailto:jlevicarvalho@gmail.com">jlevicarvalho@gmail.com</a></p>'
  },
  {
    type: 'response',
    content: '<br/>'
  },
]

const DATA = [
  {
    type: 'response',
    content: 'Wake up, Neo...',
  },
  {
    type: 'response',
    content: 'The matrix has you...',
  },
  {
    type: 'response',
    content: '...',
  },
  {
    type: 'response',
    content: '...',
  },
  {
    type: 'response',
    content: '...',
  },
  {
    type: 'response',
    content: '...',
  },
  {
    type: 'response',
    content: 'my bad...',
  },
  {
    type: 'response',
    content: 'wrong shell...',
  },
  {
    type: 'response',
    content: '...',
  },
  {
    type: 'response',
    content: '...',
  },
  {
    type: 'response',
    content: '...',
  },
  {
    type: 'response',
    content: '...',
  },
  {
    type: 'response',
    content: 'take this 💊',
  },
  {
    type: 'response',
    content: '',
  }
]

const DIR_FILES = '<b>matrix.sh   projetos.sh  sobre-mim.sh</b>'

const availableCommands = {
  ls:
    [
      {
        type: 'response',
        content: DIR_FILES,
      }
    ]
  ,
  ll:
    [
      {
        type: 'response',
        content: DIR_FILES,
      }
    ]
  ,
  'matrix.sh': DATA,
  'projetos.sh': [
    {
      type: 'response',
      content: 'Carregando projetos...',
      modal: 'projects'
    }
  ],
  'curriculo.sh': [
    {
      type: 'response',
      content: '<p>Você pode acessar meu currículo <b><a href="/levi-carvalho-curriculo.pdf" target="_blank">clicando aqui</a></p></b>',
    },
  ],
  'sobre-mim.sh': [
    {
      type: 'response',
      content: '<p>Olá 🖖</p>',
    },
    {
      type: 'response',
      content: "<p>Eu sou Levi</p>",
    },
    {
      type: 'response',
      content: '<p>Um desenvolvedor <b>fullstack</b> apaixonado pelo universo do Javascript, que adora criar soluções inovadoras que atendam aos seus propósitos com <b>excelência.</b></p>',
    }
  ]
}

type TContent = {
  content: string
  modal?: string
  type: 'response' | 'input'
}
export const Terminal = ({ posts }: any) => {
  const [displayText, setDisplayText] = useState('<p></p>')
  const [previousContent, setPreviousContent] = useState<TContent[]>([])
  const [canType, setCanType] = useState(true)
  const [text, setText] = useState('')
  const [focusedSuggestion, setFocusedSuggestion] = useState(0)
  const [modal, setModal] = useState('')

  const contentRef = useRef<HTMLInputElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  async function updateContent(newContent: TContent[]) {
    setCanType(false)
    for (const content of newContent) {
      if (content.type === 'response') {
        for (let letter of content.content) {
          await new Promise(resolve => setTimeout(resolve, 5))
          setDisplayText(prev => `${prev}${letter}`)
        }
        await new Promise(resolve => setTimeout(resolve, 200))
      }
      if (content.modal) {
        await new Promise(resolve => setTimeout(resolve, 200))
        setModal(content.modal)
      }
      setDisplayText('')
      setPreviousContent(prev => [...prev, content])
    }
    setCanType(true)
  }

  function handleKeyUp(event: KeyboardEvent<HTMLDivElement>) {
    if (event.code === 'Enter') {
      event.preventDefault()
      if (focusedSuggestion > -1 && suggestions[focusedSuggestion]) {
        handleSelectSuggest(suggestions[focusedSuggestion])
        return
      }
      const content = text
      if (text === 'clear') {
        setCanType(false)
        setPreviousContent([])
        setTimeout(() => setCanType(true), 10)
        setText('')
        return
      }
      const command = availableCommands[content.trim() as 'ls'] as TContent[]

      if (command) {
        updateContent([
          { content: content, type: 'input' },
          ...command
        ])

        setText('')
      } else {
        updateContent([
          { content: content, type: 'input' },
          { content: `Command '${content}' not found`, type: 'response' },
        ])
      }

    }

  }
  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.ctrlKey && event.code === 'KeyL') {
      event.preventDefault()
      return setPreviousContent([])
    }
    else if (event.key === 'Tab') {
      event.preventDefault()
      if (focusedSuggestion + 1 > suggestions.length - 1)
        setFocusedSuggestion(0)
      else setFocusedSuggestion(prev => prev + 1)
    }
  }


  function handleSelectSuggest(suggest: string) {
    setText(suggest)

    const command = availableCommands[suggest as 'll'] as TContent[]
    updateContent([
      { content: suggest, type: 'input' },
      ...command
    ])
    setText('')

  }
  const suggestions = useMemo(() => {
    if (text.length < 1) return Object.keys(availableCommands).filter(command => command.endsWith('.sh') && !command.includes('matrix'))
    return Object.keys(availableCommands).filter(command => command.includes(text))
  }, [text])

  useEffect(() => {
    if (focusedSuggestion > suggestions.length - 1) setFocusedSuggestion(-1)
  }, [suggestions.length])

  useEffect(() => {
    let check = false;
    (function(a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent);
    if (canType && !check) contentRef.current?.focus()
  }, [canType])

  useEffect(() => {
    containerRef.current?.scrollTo({ top: containerRef.current.scrollHeight })
  }, [previousContent, displayText])

  const firstUpdate = useRef(true);

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (firstUpdate.current === true) updateContent(WELCOME as any)
    firstUpdate.current = false
  }, [])

  return (
    <div className="flex flex-col w-full h-[80vh] md:h-[450px] border border-gray-700 rounded-lg bg-[linear-gradient(to_top,rgba(15,14,17,.5),rgba(15,14,17,.1))] backdrop-blur-sm">
      <header className="w-full min-h-[40px] border-b border-gray-700 flex gap-2 items-center pl-4">
        <div className="w-3 h-3 rounded-full bg-red-400 cursor-pointer" />
        <div className="w-3 h-3 rounded-full bg-yellow-400 cursor-pointer" />
        <div className="w-3 h-3 rounded-full bg-green-400 cursor-pointer" onClick={() => updateContent(WELCOME as TContent[])} />
      </header>
      <main ref={containerRef} className="p-4 pb-8  flex flex-col overflow-y-scroll" >
        {previousContent.map((row, index) => (
          <div key={index} className="flex items-center">
            <p>
              {row.type === 'input' && <b className="mr-2 text-green-400">guest@devlevi.com: ~$</b>}
            </p>
            <div dangerouslySetInnerHTML={{ __html: row.content }} />
          </div>
        ))}

        {
          !canType &&
          <div className="flex items-center gap-1 overflow-visible">
            <div dangerouslySetInnerHTML={{ __html: displayText }} />
            <span className="animate-cursor ml-1 w-[0.4px] h-4 bg-white" />
          </div>
        }
        {
          canType && (

            <div className="flex flex-col md:flex-row md:items-center" onClick={() => contentRef.current?.focus()}>
              <b className="mr-2 text-green-400">guest@devlevi.com: ~$ </b>
              <input value={text}
                onKeyUp={handleKeyUp}
                onKeyDown={handleKeyDown}
                className="outline-none border-none bg-transparent flex-1" ref={contentRef}
                onChange={({ target }) => setText(target.value)}
              />
            </div>
          )
        }
        <div className="flex gap-4 pt-2">
          {canType && suggestions.map((suggest, index) => (
            <button key={suggest}
              className={clsx("cursor-pointer bg-gray-800 py-1 px-2 rounded-lg text-sm", {
                "outline-primary": index === focusedSuggestion
              })}
              onClick={() => handleSelectSuggest(suggest)}
            >
              {suggest}
            </button>
          ))}
        </div>
        <Dialog.Root open={modal === 'projects'} onOpenChange={open => setModal(open ? 'projects' : '')}>
          <Dialog.Portal>
            {/* <Dialog.Overlay className='w-full h-full fixed left-0 top-0 bg-[linear-gradient(to_top,rgba(15,14,17,.5),rgba(15,14,17,.1))] backdrop-blur-sm' /> */}
            <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl border border-gray-700 rounded-lg bg-[linear-gradient(to_top,rgba(15,14,17,1),rgba(15,14,17,.5))] backdrop-blur-lg">
              <Dialog.Title>
              </Dialog.Title>
              <ProjectsSections posts={posts} />
              <Dialog.Close />
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </main>
    </div>
  )
}
