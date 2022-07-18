// 1 Valid Anagram
var isAnagram = function (s, t) {
  let string1 = s.split("").sort().join("");
  let string2 = t.split("").sort().join("");
  if (string1 === string2) {
    return true;
  } else {
    return false;
  }
};

// 2 containsDuplicate
var containsDuplicate = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        return true;
      }
    }
  }
  return false;
};

// 3 Maximum Product of Three
var maximumProduct = function (nums) {
  nums = nums.sort((a, b) => a - b);
  return Math.max(
    nums[0] * nums[1] * nums[nums.length - 1],
    nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3]
  );
};

// 4 Guess Number Higher or Lower
var guessNumber = function (n) {
  let first = 1;
  let last = n;
  while (first <= last) {
    let middle = Math.floor((first + last) / 2);
    let target = guess(middle);
    if (target == 0) {
      return middle;
    } else if (target == 1) {
      first = middle + 1;
    } else {
      last = middle - 1;
    }
  }
  return false;
};

// 5
// var searchRange = function (nums, target) {
//   let nums = nums.sort();
//   for (let i = 0; i <= nums.length; i++) {
//     if (target == nums[i]) {
//       return i;
//     } else {
//       return false;
//     }
//   }
// };

// 6 First Bad Version
var solution = function (isBadVersion) {
  return function (n) {
    let start = 1;
    let end = n;
    while (start <= end) {
      let middle = Math.floor((start + end) / 2);
      if (isBadVersion(middle)) {
        end = middle - 1;
      } else {
        start = middle + 1;
      }
    }

    return start;
  };
};

// 7 Sqrt(x)
var mySqrt = function (x) {
  let left = 1;
  let right = x;
  if (x < 2) {
    return x;
  }
  while (left < right) {
    let middle = left + Math.floor((right - left) / 2);
    if (middle * middle === x) {
      return middle;
    } else if (middle * middle > x) {
      right = middle;
    } else if (middle * middle < x) {
      left = middle + 1;
    }
  }
  return left - 1;
};

// 8 Valid Parentheses
var isValid = function (s) {
  let stack = [];
  for (i = 0; i <= s.length; i++) {
    switch (s[i]) {
      case "(":
        stack.push(")");
        break;
      case "[":
        stack.push("]");
        break;
      case "{":
        stack.push("}");
        break;
      default:
        if (s[i] !== stack.pop()) return false;
    }
  }
  return stack.length === 0;
};

// 9
var backspaceCompare = function (s, t) {
  function backspace(input) {
    const result = [];
    for (let char of input) {
      if (char === "#") {
        result.pop();
      } else {
        result.push(char);
      }
    }
    return result.join();
  }
  return backspace(s) === backspace(t);
};

// 10 Evaluate Reverse Polish Notation
var evalRPN = function (tokens) {
  const stack = [];
  for (let token of tokens) {
    switch (token) {
      case "+":
        stack.push(stack.pop() + stack.pop());
        break;
      case "-":
        stack.push(-stack.pop() + stack.pop());
        break;
      case "*":
        stack.push(stack.pop() * stack.pop());
        break;
      case "/":
        stack.push(Math.trunc((1 / stack.pop()) * stack.pop()));
        break;
      default:
        stack.push(parseInt(token));
    }
  }
  return stack[0];
};

// 11 invertTree
var invertTree = function (root) {
  if (root) {
    var temp = root.left;
    root.left = root.right;
    root.right = temp;

    invertTree(root.left);
    invertTree(root.right);
  }

  return root;
};
// 12
var isSymmetric = function (root) {
  let result = true;
  function check(node1, node2) {
    if (!node1 && !node2) {
      return result;
    } else if (!node1 || !node2) {
      return (result = false);
    } else if (node1.val !== node2.val) {
      return (result = false);
    }
    check(node1.left, node2.right);
    check(node1.right, node2.left);
  }
  check(root, root);
  return result;
};

// 13?
var preorderTraversal = function (root) {
  let result = [];
  let stack = [];
  if (root == null) {
    return result;
  }
  stack.push(root);
  while (stack.length !== 0) {
    res1 = stack.pop();
    result.push(res1.value);
    if (res1.right !== 0) {
      stack.push(res1.right);
    } else if (res1.left !== 0) {
      stack.push(res1.left);
    }
  }
  return result;
};

//  14
var inorderTraversal = function (root) {
  let traveler = root;
  let result = [];
  while (traveler !== null) {
    let ways = traveler.left;

    if (traveler.left !== null) {
      while (ways.right !== null && ways.right !== traveler) {
        ways = ways.right;
      }
      if (ways.right === null) {
        ways.right = traveler;
        traveler = traveler.left;
      } else {
        ways.right = null;
        result.push(traveler.val);
        traveler = traveler.right;
      }
    } else {
      result.push(traveler.val);
      traveler = traveler.right;
    }
  }
  return result;
};

//  15?
