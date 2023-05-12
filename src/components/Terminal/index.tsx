import clsx from "clsx"
import { useMemo } from "react"
import { useLayoutEffect } from "react"
import { useEffect, KeyboardEvent, useRef, useState } from "react"
import { ProjectsSections } from "../ProjectsSections"

const WELCOME = [
  {
    type: 'response',
    content: 'Welcome to devlevi 0.0.2 LTS (Next.js/Vercel 13.2.4-next tailwindcss)'
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

const DIR_FILES = '<b>matrix.sh   projects.sh  aboutme.sh</b>'

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
  'projects.sh': [
    {
      type: 'response',
      content: 'There are my projects',
      modal: 'projects'
    }
  ],
  'aboutme.sh': [
    {
      type: 'response',
      content: '<p>Hello 🖖</p>',
    },
    {
      type: 'response',
      content: "<p>I'm Levi</p>",
    },
    {
      type: 'response',
      content: '<p>A fullstack developer in love with the Javascript universe, who loves to create innovative solutions that serve his purposes with excellence.</p>',
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
    if (text.length < 1) return Object.keys(availableCommands).filter(command => command.endsWith('.sh'))
    return Object.keys(availableCommands).filter(command => command.includes(text))
  }, [text])

  useEffect(() => {
    if (focusedSuggestion > suggestions.length - 1) setFocusedSuggestion(-1)
  }, [suggestions.length])

  useEffect(() => {
    if (canType) contentRef.current?.focus()
  }, [canType])

  useEffect(() => {
    containerRef.current?.scrollTo({ top: containerRef.current.scrollHeight })
  }, [previousContent, displayText])

  const firstUpdate = useRef(true);
  useLayoutEffect(() => {
    if (typeof window === 'undefined') return
    if (firstUpdate.current === true) updateContent(WELCOME as any)
    firstUpdate.current = false
  })

  return (
    <div className="flex flex-col w-full h-full max-h-[80vh] md:max-h-[450px] border border-gray-700 rounded-lg bg-[linear-gradient(to_top,rgba(15,14,17,.5),rgba(15,14,17,.1))] backdrop-blur-sm">
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
        <ProjectsSections posts={posts} />
      </main>
    </div>
  )
}
