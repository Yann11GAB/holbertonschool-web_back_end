#!/usr/bin/env python3
"""
Python programm
"""
from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """
    Returns a tuple with the first element as the string k and
    the second element as the square of v.
    """
    return (k, v ** 2)
