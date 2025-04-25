#!/usr/bin/env python3
"""
this module provides the floor of a nomber
"""


def floor(n: float) -> int:
    """
    Return the floor of a number.
    """
    if n >= 0:
        return int(n)
    else:
        return int(n) - 1
