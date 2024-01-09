<script>
  import StarterKit from '@tiptap/starter-kit'
  import { Editor, EditorContent } from '@tiptap/vue-3'

  export default {
    name: 'TiptapComponent',
    components: {
      EditorContent,
    },

    data() {
      return {
        editor: null,
      }
    },

    mounted() {
      this.editor = new Editor({
        extensions: [
          StarterKit,
        ],
        content: ``,
        onUpdate:  ({ editor }) => {
           this.$emit('content-updated', editor.getHTML())
        }
      })
    },

    beforeUnmount() {
      this.editor.destroy()
    },
  }
</script>

<template>
  <div class="editorContainer">
    <div v-if="editor" class="toolbar">
      <button type="button" @click="editor.chain().focus().toggleBold().run()" :disabled="!editor.can().chain().focus().toggleBold().run()" :class="{ 'is-active': editor.isActive('bold') }" class="toolbarButton">
          <font-awesome-icon icon="bold" />
      </button>
      <button type="button" @click="editor.chain().focus().toggleItalic().run()" :disabled="!editor.can().chain().focus().toggleItalic().run()" :class="{ 'is-active': editor.isActive('italic') }" class="toolbarButton">
          <font-awesome-icon icon="italic" />
      </button>
      <button type="button" @click="editor.chain().focus().toggleStrike().run()" :disabled="!editor.can().chain().focus().toggleStrike().run()" :class="{ 'is-active': editor.isActive('strike') }" class="toolbarButton">
          <font-awesome-icon icon="strikethrough" />
      </button>
      <button type="button" @click="editor.chain().focus().toggleCode().run()" :disabled="!editor.can().chain().focus().toggleCode().run()" :class="{ 'is-active': editor.isActive('code') }" class="toolbarButton">
          <font-awesome-icon icon="fa-code" />
      </button>
      <button type="button" @click="editor.chain().focus().toggleHeading({ level: 1 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }" class="toolbarButton">
          H1
      </button>
      <button type="button" @click="editor.chain().focus().toggleHeading({ level: 2 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }" class="toolbarButton">
          H2
      </button>
      <button type="button" @click="editor.chain().focus().toggleHeading({ level: 3 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }" class="toolbarButton">
          H3
      </button>
      <button type="button" @click="editor.chain().focus().toggleBulletList().run()" :class="{ 'is-active': editor.isActive('bulletList') }" class="toolbarButton">
          <font-awesome-icon icon="fa-list" />
      </button>
      <button type="button" @click="editor.chain().focus().toggleOrderedList().run()" :class="{ 'is-active': editor.isActive('orderedList') }" class="toolbarButton">
          <font-awesome-icon icon="fa-list-ol" />
      </button>
      <button type="button" @click="editor.chain().focus().toggleCodeBlock().run()" :class="{ 'is-active': editor.isActive('codeBlock') }" class="toolbarButton">
          <font-awesome-icon icon="fa-square" />
      </button>
      <button type="button" @click="editor.chain().focus().setHorizontalRule().run()" class="toolbarButton">
          <font-awesome-icon icon="fa-window-minimize" />
      </button>
      <button type="button" @click="editor.chain().focus().undo().run()" :disabled="!editor.can().chain().focus().undo().run()" class="toolbarButton">
          <font-awesome-icon icon="undo" />
      </button>
      <button type="button" @click="editor.chain().focus().redo().run()" :disabled="!editor.can().chain().focus().redo().run()" class="toolbarButton">
          <font-awesome-icon icon="fa-repeat" />
      </button>
    </div>
    <div class="editorContent">
        <editor-content :editor="editor" />
    </div>
  </div>
</template>

<style lang="scss">
    .editorContainer {
        width: 100%;
        height: auto;
        border: solid 1px #000;
        border-radius: 8px;
    }

    .toolbar {
        width: 100%;
        height: auto;
        padding: 10px;
        border-radius: 8px 8px 0px 0px;
        flex-wrap: wrap;
        background-color: #141434;
        color: #fff;
    }

     .editorContent {
        width: 100%;
        height: auto;
        padding: 40px 20px;
    }

     .toolbarButton {
        width: 50px;
        height: 50px;
        margin: 5px;
        border: none;
        border-radius: 8px;
        color: #fff;
        background: transparent;
    }

    .toolbarButton:active {
        background-color: #eae8eb;
    }
/* Basic editor styles */
.tiptap {
  > * + * {
    margin-top: 0.75em;
  }

  ul,
  ol {
    padding: 0 1rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.1;
  }

  code {
    background-color: rgba(#616161, 0.1);
    color: #616161;
  }

  pre {
    background: #0D0D0D;
    color: #FFF;
    font-family: 'JetBrainsMono', monospace;
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;

    code {
      color: inherit;
      padding: 0;
      background: none;
      font-size: 0.8rem;
    }
  }

  img {
    max-width: 100%;
    height: auto;
  }

  blockquote {
    padding-left: 1rem;
    border-left: 2px solid rgba(#0D0D0D, 0.1);
  }

  hr {
    border: none;
    border-top: 2px solid rgba(#0D0D0D, 0.1);
    margin: 2rem 0;
  }
}
</style>