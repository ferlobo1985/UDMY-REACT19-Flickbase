import { EditorContent, useEditor, BubbleMenu } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit';
import '../../styles/tiptap.scss'

const Tiptap = ({setEditorState,editorContent=''}) => {

    const editor = useEditor({
        content: editorContent,
        extensions:[StarterKit],
        onUpdate:({editor})=>{
            setEditorState(editor.getHTML())
        }
    })


    return(
        <>
            <div>
            {editor && <BubbleMenu className="bubble-menu" tippyOptions={{ duration: 100 }} editor={editor}>
                <button
                    type="button"
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    className={editor.isActive('bold') ? 'is-active' : ''}
                >
                Bold
                </button>
                <button
                    type="button"
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    className={editor.isActive('italic') ? 'is-active' : ''}
                >
                Italic
                </button>
                <button
                    type="button"
                    onClick={() => editor.chain().focus().toggleStrike().run()}
                    className={editor.isActive('strike') ? 'is-active' : ''}
                >
                Strike
                </button>
            </BubbleMenu>}
            </div>
            <span>
                <EditorContent editor={editor}/>
            </span>
        </>
    )
}

export default Tiptap;