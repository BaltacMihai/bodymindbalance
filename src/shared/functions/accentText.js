/**
 * Highlight words enclosed in hashtags by wrapping them in a span with the 'accent' class.
 *
 * @param {string} input - The input string containing words enclosed in hashtags (#).
 * @returns {string} - The input string with highlighted words wrapped in spans.
 * @example
 *  * highlightString("#Bucuria# este adevărata ta natură");
 * // Returns: "<span class="accent">Bucuria</span> este adevărata ta natură"
 */
export default function highlightString(input) {
  // Regular expression to match the pattern "#word#"
  var regex = /#([^#]+)#/g;

  // Replace matches with the desired HTML structure
  var result = input.replace(regex, '<span class="accent">$1</span>');

  return result;
}
