#!/usr/bin/env python3
"""
Python programm
"""
import asyncio
from basic_async_syntax import wait_random


def task_wait_random(max_delay: int) -> asyncio.Task:
    """
    Function that takes an integer argument max_delay
    and returns a asyncio.Task"""
    return asyncio.create_task(wait_random(max_delay))
