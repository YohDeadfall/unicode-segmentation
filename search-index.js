var searchIndex = JSON.parse('{\
"unicode_segmentation":{"doc":"Iterators which split strings on Grapheme Cluster, Word …","i":[[3,"Graphemes","unicode_segmentation","External iterator for a string\'s grapheme clusters.",null,null],[3,"GraphemeIndices","","External iterator for grapheme clusters and byte offsets.",null,null],[3,"GraphemeCursor","","Cursor-based segmenter for grapheme clusters.",null,null],[4,"GraphemeIncomplete","","An error return indicating that not enough content was …",null,null],[13,"PreContext","","More pre-context is needed. The caller should call …",0,null],[13,"PrevChunk","","When requesting <code>prev_boundary</code>, the cursor is moving past …",0,null],[13,"NextChunk","","When requesting <code>next_boundary</code>, the cursor is moving past …",0,null],[13,"InvalidOffset","","An error returned when the chunk given does not contain …",0,null],[17,"UNICODE_VERSION","","The version of Unicode that this version of …",null,null],[3,"UWordBounds","","External iterator for a string\'s word boundaries.",null,null],[3,"UWordBoundIndices","","External iterator for word boundaries and byte offsets.",null,null],[3,"UnicodeWords","","An iterator over the substrings of a string which, after …",null,null],[3,"UnicodeWordIndices","","An iterator over the substrings of a string which, after …",null,null],[3,"USentenceBounds","","External iterator for a string\'s sentence boundaries.",null,null],[3,"USentenceBoundIndices","","External iterator for sentence boundaries and byte …",null,null],[3,"UnicodeSentences","","An iterator over the substrings of a string which, after …",null,null],[8,"UnicodeSegmentation","","Methods for segmenting strings according to Unicode …",null,null],[10,"graphemes","","Returns an iterator over the grapheme clusters of <code>self</code>.",1,[[],["graphemes",3]]],[10,"grapheme_indices","","Returns an iterator over the grapheme clusters of <code>self</code> …",1,[[],["graphemeindices",3]]],[10,"unicode_words","","Returns an iterator over the words of <code>self</code>, separated on …",1,[[],["unicodewords",3]]],[10,"unicode_word_indices","","Returns an iterator over the words of <code>self</code>, separated on …",1,[[],["unicodewordindices",3]]],[10,"split_word_bounds","","Returns an iterator over substrings of <code>self</code> separated on …",1,[[],["uwordbounds",3]]],[10,"split_word_bound_indices","","Returns an iterator over substrings of <code>self</code>, split on …",1,[[],["uwordboundindices",3]]],[10,"unicode_sentences","","Returns an iterator over substrings of <code>self</code> separated on …",1,[[],["unicodesentences",3]]],[10,"split_sentence_bounds","","Returns an iterator over substrings of <code>self</code> separated on …",1,[[],["usentencebounds",3]]],[10,"split_sentence_bound_indices","","Returns an iterator over substrings of <code>self</code>, split on …",1,[[],["usentenceboundindices",3]]],[11,"from","","",2,[[]]],[11,"borrow","","",2,[[]]],[11,"borrow_mut","","",2,[[]]],[11,"try_from","","",2,[[],["result",4]]],[11,"into","","",2,[[]]],[11,"try_into","","",2,[[],["result",4]]],[11,"into_iter","","",2,[[]]],[11,"type_id","","",2,[[],["typeid",3]]],[11,"from","","",3,[[]]],[11,"borrow","","",3,[[]]],[11,"borrow_mut","","",3,[[]]],[11,"try_from","","",3,[[],["result",4]]],[11,"into","","",3,[[]]],[11,"try_into","","",3,[[],["result",4]]],[11,"into_iter","","",3,[[]]],[11,"type_id","","",3,[[],["typeid",3]]],[11,"from","","",4,[[]]],[11,"borrow","","",4,[[]]],[11,"borrow_mut","","",4,[[]]],[11,"try_from","","",4,[[],["result",4]]],[11,"into","","",4,[[]]],[11,"try_into","","",4,[[],["result",4]]],[11,"type_id","","",4,[[],["typeid",3]]],[11,"from","","",0,[[]]],[11,"borrow","","",0,[[]]],[11,"borrow_mut","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"into","","",0,[[]]],[11,"try_into","","",0,[[],["result",4]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"from","","",5,[[]]],[11,"borrow","","",5,[[]]],[11,"borrow_mut","","",5,[[]]],[11,"try_from","","",5,[[],["result",4]]],[11,"into","","",5,[[]]],[11,"try_into","","",5,[[],["result",4]]],[11,"into_iter","","",5,[[]]],[11,"type_id","","",5,[[],["typeid",3]]],[11,"from","","",6,[[]]],[11,"borrow","","",6,[[]]],[11,"borrow_mut","","",6,[[]]],[11,"try_from","","",6,[[],["result",4]]],[11,"into","","",6,[[]]],[11,"try_into","","",6,[[],["result",4]]],[11,"into_iter","","",6,[[]]],[11,"type_id","","",6,[[],["typeid",3]]],[11,"from","","",7,[[]]],[11,"borrow","","",7,[[]]],[11,"borrow_mut","","",7,[[]]],[11,"try_from","","",7,[[],["result",4]]],[11,"into","","",7,[[]]],[11,"try_into","","",7,[[],["result",4]]],[11,"into_iter","","",7,[[]]],[11,"type_id","","",7,[[],["typeid",3]]],[11,"from","","",8,[[]]],[11,"borrow","","",8,[[]]],[11,"borrow_mut","","",8,[[]]],[11,"try_from","","",8,[[],["result",4]]],[11,"into","","",8,[[]]],[11,"try_into","","",8,[[],["result",4]]],[11,"into_iter","","",8,[[]]],[11,"type_id","","",8,[[],["typeid",3]]],[11,"from","","",9,[[]]],[11,"borrow","","",9,[[]]],[11,"borrow_mut","","",9,[[]]],[11,"try_from","","",9,[[],["result",4]]],[11,"into","","",9,[[]]],[11,"try_into","","",9,[[],["result",4]]],[11,"into_iter","","",9,[[]]],[11,"type_id","","",9,[[],["typeid",3]]],[11,"from","","",10,[[]]],[11,"borrow","","",10,[[]]],[11,"borrow_mut","","",10,[[]]],[11,"try_from","","",10,[[],["result",4]]],[11,"into","","",10,[[]]],[11,"try_into","","",10,[[],["result",4]]],[11,"into_iter","","",10,[[]]],[11,"type_id","","",10,[[],["typeid",3]]],[11,"from","","",11,[[]]],[11,"borrow","","",11,[[]]],[11,"borrow_mut","","",11,[[]]],[11,"try_from","","",11,[[],["result",4]]],[11,"into","","",11,[[]]],[11,"try_into","","",11,[[],["result",4]]],[11,"into_iter","","",11,[[]]],[11,"type_id","","",11,[[],["typeid",3]]],[11,"fmt","","",0,[[["formatter",3]],["result",6]]],[11,"eq","","",0,[[["graphemeincomplete",4]]]],[11,"ne","","",0,[[["graphemeincomplete",4]]]],[11,"next_back","","",2,[[],["option",4]]],[11,"next_back","","",3,[[],["option",4]]],[11,"next_back","","",5,[[],["option",4]]],[11,"next_back","","",6,[[],["option",4]]],[11,"next_back","","",8,[[],["option",4]]],[11,"next_back","","",7,[[],["option",4]]],[11,"next","","",2,[[],["option",4]]],[11,"size_hint","","",2,[[]]],[11,"size_hint","","",3,[[]]],[11,"next","","",3,[[],["option",4]]],[11,"next","","",5,[[],["option",4]]],[11,"next","","",6,[[],["option",4]]],[11,"next","","",8,[[],["option",4]]],[11,"size_hint","","",8,[[]]],[11,"size_hint","","",7,[[]]],[11,"next","","",7,[[],["option",4]]],[11,"next","","",9,[[],["option",4]]],[11,"size_hint","","",10,[[]]],[11,"next","","",10,[[],["option",4]]],[11,"next","","",11,[[],["option",4]]],[11,"size_hint","","",11,[[]]],[11,"clone","","",2,[[],["graphemeindices",3]]],[11,"clone","","",3,[[],["graphemes",3]]],[11,"clone","","",4,[[],["graphemecursor",3]]],[11,"clone","","",7,[[],["uwordbounds",3]]],[11,"clone","","",8,[[],["uwordboundindices",3]]],[11,"clone","","",9,[[],["unicodesentences",3]]],[11,"clone","","",10,[[],["usentencebounds",3]]],[11,"clone","","",11,[[],["usentenceboundindices",3]]],[11,"as_str","","View the underlying data (the part yet to be iterated) as …",2,[[]]],[11,"as_str","","View the underlying data (the part yet to be iterated) as …",3,[[]]],[11,"new","","Create a new cursor. The string and initial offset are …",4,[[],["graphemecursor",3]]],[11,"set_cursor","","Set the cursor to a new location in the same string.",4,[[]]],[11,"cur_cursor","","The current offset of the cursor. Equal to the last value …",4,[[]]],[11,"provide_context","","Provide additional pre-context when it is needed to …",4,[[]]],[11,"is_boundary","","Determine whether the current cursor location is a …",4,[[],[["graphemeincomplete",4],["result",4]]]],[11,"next_boundary","","Find the next boundary after the current cursor position. …",4,[[],[["option",4],["result",4],["graphemeincomplete",4]]]],[11,"prev_boundary","","Find the previous boundary after the current cursor …",4,[[],[["option",4],["result",4],["graphemeincomplete",4]]]],[11,"as_str","","View the underlying data (the part yet to be iterated) as …",8,[[]]],[11,"as_str","","View the underlying data (the part yet to be iterated) as …",7,[[]]]],"p":[[4,"GraphemeIncomplete"],[8,"UnicodeSegmentation"],[3,"GraphemeIndices"],[3,"Graphemes"],[3,"GraphemeCursor"],[3,"UnicodeWords"],[3,"UnicodeWordIndices"],[3,"UWordBounds"],[3,"UWordBoundIndices"],[3,"UnicodeSentences"],[3,"USentenceBounds"],[3,"USentenceBoundIndices"]]}\
}');
addSearchOptions(searchIndex);initSearch(searchIndex);