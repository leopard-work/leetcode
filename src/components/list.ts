import { romanToInt, romanToIntInitial } from "./roman-to-int";
import {
  longestCommonPrefix,
  longestCommonPrefixInitial,
} from "./longest-common-prefix";
import { twoSum, twoSumInitial, twoSumParse } from "./two-sum";
import { isPalindrome, isPalindromeInitial } from "./is-palindrome";
import { isValid, isValidInitial } from "./valid-parentheses";
import {
  mergeTwoLists,
  mergeTwoListsInitial,
  mergeTwoListsParse,
} from "./21_merge-two-sorted-lists";
import {
  removeDuplicates,
  removeDuplicatesInitial,
} from "./26_remove_duplicates_from_sorted_array";

const URL = "https://leetcode.com/problems/";
export const FIRSTRUN = 26;

export const listData = [
  {
    f: twoSumParse,
    f_view: twoSum,
    id: "1",
    name: "1. Two Sum",
    link: `${URL}two-sum/`,
    initial: twoSumInitial,
    initialType: "ListNode",
  },
  {
    f: isPalindrome,
    id: "9",
    name: "9. Palindrome Number",
    link: `${URL}palindrome-number/`,
    initial: isPalindromeInitial,
    initialType: "number",
  },
  {
    f: romanToInt,
    id: "13",
    name: "13. Roman to Integer",
    link: `${URL}roman-to-integer/`,
    initial: romanToIntInitial,
  },
  {
    f: longestCommonPrefix,
    id: "14",
    name: "14. Longest Common Prefix",
    link: `${URL}longest-common-prefix/`,
    initial: longestCommonPrefixInitial,
    initialType: "array",
  },
  {
    f: isValid,
    id: "20",
    name: "20. Valid Parentheses",
    link: `${URL}valid-parentheses/`,
    initial: isValidInitial,
  },
  {
    f: mergeTwoListsParse,
    f_view: mergeTwoLists,
    id: "21",
    name: "21. Merge Two Sorted Lists",
    link: `${URL}merge-two-sorted-lists/`,
    initial: mergeTwoListsInitial,
  },
  {
    f: removeDuplicates,
    id: "26",
    name: "26. Remove Duplicates from Sorted Array",
    link: `${URL}remove-duplicates-from-sorted-array/`,
    initial: removeDuplicatesInitial,
    initialType: "arrayNumber",
  },
];
